SELECT o.order_id, o.final_status, p.payment_status
FROM orders o
LEFT JOIN payments p ON o.order_id = p.order_id
WHERE o.order_id = 'ORD-1001';
