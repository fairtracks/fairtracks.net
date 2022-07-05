#!/usr/bin/env bash

npx wait-on $WAIT_FOR_URL -i 15000 -v -t 3000000 && npx wait-on $WAIT_FOR_URL -i 10000 -v -t 60000 && npx wait-on $WAIT_FOR_URL -i 10000 -v -t 60000 &
PID_WAIT_ON=$!
exec 3< <($SERVE_COMMAND 2>&1)
timeout 50m tee <&3 | sed "/Initialized all stores./q"
echo "Waiting on wait-on to finish..."
wait $PID_WAIT_ON
