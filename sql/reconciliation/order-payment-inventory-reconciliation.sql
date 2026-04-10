SELECT
  o.order_id,
  o.final_status AS order_status,
  p.payment_status,
  i.inventory_status
FROM orders o
LEFT JOIN payments p ON o.order_id = p.order_id
LEFT JOIN inventory_reservations i ON o.order_id = i.order_id
WHERE o.order_id = 'ORD-1001';
