SELECT
  order_id,
  event_type,
  COUNT(*) AS duplicate_count
FROM event_audit
GROUP BY order_id, event_type
HAVING COUNT(*) > 1;
