#!/usr/bin/env bash
echo $(python3 StaticCheck.py)
if [ $(python3 StaticCheck.py) = 0]; then
    echo 'config not present!'
    exit 2
fi
echo 'config check passed!'
npm install
npm run build
#cd src/__tests__
# jest
cd ..
git add .
git commit -m $1
git push origin master
git status
echo 'finished'