mod routes;
mod database;

use tracing::info;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    let database = database::init().await.unwrap();

    let address = "0.0.0.0:9001";

    let listener = tokio::net::TcpListener::bind(address).await.unwrap();
    info!("Connected to {}", address);

    axum::serve(listener, routes::router(database)).await.unwrap();
}
