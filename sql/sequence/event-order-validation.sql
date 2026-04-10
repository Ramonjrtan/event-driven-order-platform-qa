SELECT
  order_id,
  event_type,
  event_timestamp,
  LAG(event_type) OVER (PARTITION BY order_id ORDER BY event_timestamp) AS previous_event
FROM event_audit
WHERE order_id = 'ORD-1001'
ORDER BY event_timestamp;
