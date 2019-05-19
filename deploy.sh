docker build --tag lbrady/multi-client:latest --tag lbrady/multi-client:$SHA -f ./client/Dockerfile ./client
docker build --tag lbrady/multi-server:latest --tag lbrady/multi-server:$SHA -f ./server/Dockerfile ./server
docker build --tag lbrady/multi-worker:latest --tag lbrady/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push lbrady/multi-client:latest
docker push lbrady/multi-server:latest
docker push lbrady/multi-worker:latest

docker push lbrady/multi-client:$SHA
docker push lbrady/multi-server:$SHA
docker push lbrady/multi-worker:$SHA

kubectl apply -f K8s
kubectl set image deployments/client-deployment client=lbrady/multi-client:$SHA
kubectl set image deployments/server-deployment server=lbrady/multi-server:$SHA
kubectl set image deployments/worker-deployment worker=lbrady/multi-worker:$SHA
