@echo off
set /p "commit=Nom du commit: "
git add --all
git commit -m %commit
git push origin -u master
git push web -u master