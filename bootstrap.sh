#!/usr/bin/env bash

# create project folder
sudo mkdir "/var/www/dev0"

# update / upgrade
sudo apt-get update
sudo apt-get -y upgrade

# install apache and php
sudo apt-get install -y apache2
sudo apt-get install -y php5

# install mysql and give password to installer
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password '1234'"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password '1234'"
sudo apt-get -y install mysql-server
sudo apt-get install php5-mysql

# install phpmyadmin and give password(s) to installer
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/dbconfig-install boolean true"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/app-password-confirm password '1234'"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/mysql/admin-pass password '1234'"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/mysql/app-pass password '1234'"
sudo debconf-set-selections <<< "phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2"
sudo apt-get -y install phpmyadmin

# install git
sudo apt-get -y install git

# install Composer
sudo apt-get install curl

curl -s https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer