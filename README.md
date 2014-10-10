# Sails application running in docker container
_______________________________________________

###Fig


1. Clone repository
    
    git clone https://github.com/marcko/SailsApp-docker.git

2.  Create volumen container data 

     docker run -v /data/db --name MONGODB_DATA busybox true
     
3. Running fig

   fig up -d
   
4. Install dependencies
 
   fig run --rm web sails new [name-application]

5 Copy files application in main directory


###Ready!!

  
