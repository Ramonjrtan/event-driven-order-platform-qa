SELECT order_id, event_type, correlation_id, event_timestamp
FROM event_audit
WHERE order_id = 'ORD-1001'
ORDER BY event_timestamp;
