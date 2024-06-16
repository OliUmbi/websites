use axum::{Extension, Json, Router};
use axum::routing::{post};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use uuid::Uuid;
use validator::Validate;

pub fn router() -> Router {
    Router::new()
        .route("/authentication", post(create).delete(delete))
}

#[derive(Deserialize, Validate)]
pub struct AuthenticationCreateRequest {
    #[validate(length(min = 1, max = 32))]
    name: String,
    #[validate(length(min = 8, max = 32))]
    password: String,
}

#[derive(Serialize)]
pub struct AuthenticationDeleteRequest {
    account_id: Uuid,
    name: String,
}

async fn create(database: Extension<PgPool>, Json(body): Json<AuthenticationCreateRequest>) -> Json<&'static str> {
    body.validate().expect("TODO: panic message");

    sqlx::query_as!()

    Json("Success")
}

async fn delete() -> Json<&'static str> {

    Json("Success")
}
