package ch.oliumbi.backend.autoload;

import java.lang.reflect.Array;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Factory {

  private final List<Object> instances = new ArrayList<>();

  private final List<Class<?>> classes;

  public Factory(List<Class<?>> classes) {
    this.classes = classes;
    classes.forEach(this::load);
  }

  public List<Object> all() {
    return instances;
  }

  private Object load(Class<?> clazz) {
    for (Object instance : instances) {
      if (clazz.isInstance(instance)) {
        return instance;
      }
    }

    Constructor<?> constructor = getConstructor(clazz);

    if (isCircular(clazz, List.of(constructor.getParameterTypes()))) {
      throw new RuntimeException("Failed to create class, reason: circular reference, class: " + clazz.getName());
    }

    List<Object> arguments = new ArrayList<>();
    for (Class<?> type : constructor.getParameterTypes()) {
      if (type.isArray()) {
        Class<?> arrayType = type.componentType();

        List<Object> interfaceImplementations = new ArrayList<>();

        for (Class<?> clazz1 : classes) {
          List<Class<?>> interfaces = List.of(clazz1.getInterfaces());

          if (interfaces.contains(arrayType)) {
            interfaceImplementations.add(load(clazz1));
          }
        }

        Object[] array = (Object[]) Array.newInstance(arrayType, interfaceImplementations.size());

        interfaceImplementations.toArray(array);

        arguments.add(array);
      } else {
        arguments.add(load(type));
      }
    }

    return instantiate(constructor, arguments.toArray());
  }

  private Constructor<?> getConstructor(Class<?> clazz) {
    Constructor<?>[] constructors = clazz.getConstructors();

    if (constructors.length == 0) {
      throw new RuntimeException("Failed to get constructor, reason: has no public constructors or array class or primitive or void, class: " + clazz.getName());
    }
    if (constructors.length > 1) {
      throw new RuntimeException("Failed to get constructor, reason: has multiple constructors, class: " + clazz.getName());
    }

    return constructors[0];
  }

  private boolean isCircular(Class<?> clazz, List<Class<?>> types) {

    for (Class<?> type : types) {
      if (clazz.equals(type)) {
        return true;
      }

      List<Class<?>> children = new ArrayList<>();

      if (type.isArray()) {
        Class<?> arrayType = type.componentType();

        for (Class<?> clazz1 : classes) {
          List<Class<?>> interfaces = List.of(clazz1.getInterfaces());

          if (interfaces.contains(arrayType)) {
            children.add(clazz1);
          }
        }
      } else {
        children = List.of(getConstructor(type).getParameterTypes());
      }

      if (isCircular(clazz, children)) {
        return true;
      }
    }

    return false;
  }

  private Object instantiate(Constructor<?> constructor, Object[] arguments) {
    try {
      Object instance = constructor.newInstance(arguments);

      instances.add(instance);

      return instance;
    } catch (InstantiationException e) {
      throw new RuntimeException("Failed to instantiate class, reason: class is abstract, constructor: " + constructor.getName(), e);
    } catch (IllegalAccessException e) {
      throw new RuntimeException("Failed to instantiate class, reason: constructor is inaccessible, constructor: " + constructor.getName(), e);
    } catch (InvocationTargetException e) {
      throw new RuntimeException("Failed to instantiate class, reason: constructor threw an exception, constructor: " + constructor.getName(), e);
    }
  }
}
