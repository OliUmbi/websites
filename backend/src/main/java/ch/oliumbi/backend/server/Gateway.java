package ch.oliumbi.backend.server;

import java.nio.file.PathMatcher;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.Response;
import org.eclipse.jetty.server.handler.gzip.GzipHandler;
import org.eclipse.jetty.util.BufferUtil;
import org.eclipse.jetty.util.Callback;

public class Gateway extends Handler.Abstract {

  @Override
  public boolean handle(Request request, Response response, Callback callback) throws Exception {

    request.getHttpURI()

    response.write(true, BufferUtil.toBuffer("test"), callback);


    return true;
  }
}
