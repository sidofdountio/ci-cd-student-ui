#!/bin/bash
echo "=====================RUNING UNIT TEST WITH KARMA===============\n";
ng test --no-watch --no-progress --browsers=ChromeHeadless
echo "=====================END OF TEST ==============================="
