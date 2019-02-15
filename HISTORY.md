#Jenkins

1. Setup pipline as "pipeline" in Jenkins
2. make sure jenkins can run docker:
    https://getintodevops.com/blog/the-simple-way-to-run-docker-in-docker-for-ci
3. Give Jenkins permission to use docker:
   sudo usermod -a -G docker jenkins
   chmod 777 /var/run/docker.sock
   (https://stackoverflow.com/questions/47854463/got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket-at-uni)
4.   
    

