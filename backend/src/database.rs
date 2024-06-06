use sqlx::{Error, PgPool};
use sqlx::postgres::PgPoolOptions;

pub async fn init() -> Result<PgPool, Error> {
    let url = "postgresql://websites:websites@localhost:5432/websites";

    PgPoolOptions::new()
        .max_connections(20)
        .connect(&url)
        .await
}
