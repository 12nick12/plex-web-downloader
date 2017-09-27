
Plex Web Downloader
===============

The original translated into english and using pwd url base for nginx reverse proxy use

This project allows you to create a list of your plex video files and to share them through a web interface.

**************************************************************************************************************************************
I would recomend setting up a crontab that backups the plex database every night then have this use the new file that has been created that way this doesn't lock the plex database
***************************************************************************************************************************************

MANUAL INSTALLATION
--------------------

If you prefer to compile the latest version of the project yourself, or if your operating system is not supported:

** On Windows **

  prerequisites, install git (https://git-scm.com/download/win)

  prerequisites, install nodejs 0.12.x (https://nodejs.org/dist/v0.12.7/)

  open the 'cmb' command prompt, and then move to a directory where you want to install

    git clone https://github.com/12nick12/pwd.git

    cd plex-web-downloader

    npm install

  modify the file config.js, to put the path of the database plex (attention must double the anti-slash and protect the spaces)

  For example: C: \\ Users \\ yourUsername \\ AppData \\ Local \\ Plex \ Media \ Server \\ Plug-in \ Support \\ Databases \\ com.plexapp.plugins.library.db

    npm start

  then open in your browser the address http: // localhost: 3000


** Under MacOS **

  prerequisites, nodejs

    brew install node

  then

    git clone https://github.com/12nick12/pwd.git

    cd plex-web-downloader

    npm install

  modify the file config.js, to put the path of the database plex

  example: / Users / yourUsername / Library / Application Support / Plex Media Server / Plug-in Support / Databases / com.plexapp.plugins.library.db

    npm start

  then open in your browser the address http: // localhost: 3000


** Under Ubuntu **

  prerequisites nodejs, or

    apt-get install nodejs

    ln -s / usr / bin / nodejs / usr / local / bin / node

  then move to your directory to install and:

    git clone https://github.com/12nick12/pwd.git

    cd plex-web-downloader

    npm install

  modify the file config.js, to put the path of the database plex

  Example: / home / yourUsername / plex-config / Plex Media Server / Plug-in Support / Databases / com.plexapp.plugins.library.db

    npm start

  then open in your browser the address http: // localhost: 3000



DEVELOPMENT
--------------------

** the project was originally created with **

    node install express -g

    node install express-generator -g

    express project_name

    cd project_name

    npm install

** to install plex (from a dockerfile) **

    mkdir ~ / plex-config

    sudo chown 797: 797 -R ~ / plex-config

    sudo docker -d --restart = always -v ~ / plex-config: / config -v ~ / Movies: / media / plex -p 32400: 32400 wernight / plex-media-server

    sudo chmod 777 ~ / plex-config / Plex \ Media \ Server / Plug-in / Support / Databases / *

    sudo chmod 777 ~ / Movies

    sudo ln -s ~ / Movies / media / plex

then configure your channels on: http: // localhost: 32400 / web / index.html


COMPILATION
--------------------

    npm install enclose -g

      enclose -o bin / mac_bin --loglevel info -c enclose_config.js -v 0.12.7 ./bin/www


TODO List
--------------------
* Manage thumbnail images
* Manage multi-source downloads by offering a link aria2 (see aria2.sourceforge.net)
* Integrated web ui: http://ziahamza.github.io/webui-aria2/
* Set up an upload limit that can be activated on demand
