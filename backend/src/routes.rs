mod root;
mod account;
mod authentication;

use axum::{Extension, Router};
use sqlx::PgPool;

pub fn router(database: PgPool) -> Router {
    Router::new()
        .merge(root::router())
        .merge(authentication::router())
        .merge(account::router())
        .layer(Extension(database))
}
