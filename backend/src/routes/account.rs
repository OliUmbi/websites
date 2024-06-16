use axum::{Extension, Json, Router};
use axum::routing::{get};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use tracing::info;
use uuid::Uuid;
use validator::Validate;


pub fn router() -> Router {
    Router::new()
        .route("/account", get(load).post(create))
}

#[derive(Deserialize, Validate)]
pub struct AccountCreate {
    #[validate(length(min = 1, max = 32))]
    name: String,
}

#[derive(Serialize)]
pub struct AccountLoad {
    account_id: Uuid,
    name: String,
}

async fn load(database: Extension<PgPool>) -> Json<Vec<AccountLoad>> {
    let accounts = sqlx::query_as_with!(
        AccountLoad,
        r#"
        SELECT  account_id,
                name
        FROM    account
        "#
    ).fetch_all(&*database).await;

    Json(accounts.expect("asdöflalskd"))
}

async fn create(Json(body): Json<AccountCreate>) -> Json<&'static str> {
    body.validate().expect("TODO: panic message");

    info!(body.name);

    Json("Success")
}
