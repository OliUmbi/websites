use axum::Router;
use axum::routing::{get};
use tracing::info;

pub fn router() -> Router {
    Router::new()
        .route("/", get(root))
}

async fn root() -> &'static str {
    info!("Handling root request");
    "Hello, World!"
}
