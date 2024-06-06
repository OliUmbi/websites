mod root;
mod account;

use axum::{Extension, Router};
use sqlx::PgPool;

pub fn router(database: PgPool) -> Router {
    Router::new()
        .merge(root::router())
        .merge(account::router())
        .layer(Extension(database))
}
