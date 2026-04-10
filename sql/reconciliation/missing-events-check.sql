SELECT o.order_id
FROM orders o
LEFT JOIN event_audit e
  ON o.order_id = e.order_id
  AND e.event_type = 'order.created'
WHERE e.order_id IS NULL;
