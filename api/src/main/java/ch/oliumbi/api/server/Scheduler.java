package ch.oliumbi.api.server;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public abstract class Scheduler {

  private final ScheduledExecutorService scheduledExecutorService = Executors.newScheduledThreadPool(1);

  public Scheduler(int rate) {
    scheduledExecutorService.scheduleAtFixedRate(this::scheduled, 1, rate, TimeUnit.MINUTES);
  }

  protected abstract void scheduled();
}