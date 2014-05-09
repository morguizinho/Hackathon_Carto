module.exports = {
	ip: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
	pg_config: process.env.OPENSHIFT_POSTGRESQL_DB_URL || 'postgresql://postgres:postgres@127.0.0.1:5432/postgres',
	table_name: process.env.OPENSHIFT_APP_NAME || process.env.PG_MAP_TABLE_NAME || 'places'
}