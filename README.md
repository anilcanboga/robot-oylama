# Vote Application

Bu proje çalışanların oylanıp, listelendiği bir projedir.

https://robotyarismasi.herokuapp.com/

## Heroku Adımlar

Dockerize edilip Heroku ile deploy edilmiştir.

Heroku login\
Heroku container:login\
Heroku create\

docker build -t registry.heroku.com/robotyarismasi/web .\
docker push registry.heroku.com/robotyarismasi/web\
heroku container:release web -a robotyarismasi\
heroku open -a robotyarismasi\

## Görevler

React ✓\
API(Random Data API) ✓\
EcmaScript6 ✓\
SSR ✓\
Redux ✓\
Heroku - Docker ✓
