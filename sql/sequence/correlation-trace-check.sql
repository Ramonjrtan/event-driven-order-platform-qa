SELECT
  correlation_id,
  COUNT(DISTINCT event_type) AS distinct_events,
  MIN(event_timestamp) AS first_seen,
  MAX(event_timestamp) AS last_seen
FROM event_audit
WHERE order_id = 'ORD-1001'
GROUP BY correlation_id;
