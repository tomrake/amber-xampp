
#WHAT IS Test-WebDAV?
The is an xammp app for serving amber. And for specifically testing the WebDAV functions from amber.

##INSTALL xampp for Windows

I installed mine at C:\xampp.

 Ensure the following directories exist:
```
 xampp\apps\amber\conf
 xampp\apps\amber\locks
 xampp\apps\amber\htdocs\amber
 xampp\apps\amber\htdocs\addons
```

###Correct the xampp/apache/conf/httpd.conf

####Ensure WebDAV Modules are loaded:
In xampp\apache\con\httpd.conf make sure the DAV modules are loaded that the following lines are not commented out.



```
LoadModule dav_module modules/mod_dav.so
LoadModule dav_fs_module modules/mod_dav_fs.so
LoadModule dav_lock_module modules/mod_dav_lock.so
```
####Ensure the Amber Configuration is loaded
Ensure this line is at the end of xampp\apache\conf\httpd.conf
```
Include "C:/xampp/apps/amber/conf/httpd-prefix.conf"
```

####Create an AMBER configuration files:

in xamber\apps\amber\conf create two files:

httpd-prefix.conf
```
Alias /amber/ "C:/xampp/apps/amber/htdocs/amber/"
Alias /amber "C:/xampp/apps/amber/htdocs/amber"
Alias /amber-addons/ "C:/xampp/apps/amber/htdocs/addons/"
Alias /amber-amber-addons "C:/xampp/apps/amber/htdocs/addons"
Include "C:/xampp/apps/amber/conf/httpd-app.conf"
```

httpd-app.conf
```
DavLockDB "C:/xampp/apps/amber/locks/DavLock"
<Directory "C:/xampp/apps/amber/htdocs">
    Options +MultiViews
    AllowOverride None
    <IfVersion < 2.3 >
    Order allow,deny
    Allow from all
    </IfVersion>
    <IfVersion >= 2.3>
    Require all granted
    </IfVersion>
</Directory>

<Location /amber>

Dav On

</Location>


<Location /amber-addons>

Dav On

</Location>
```

###Clone amber into xampp/amber/htdocs/amber
```
git clone https://github.com/amber-smalltalk/amber.git xampp/amber/htdocs/amber
cd xampp/amber/htdocs/amber
npm install
bower install
```



## Start or Restart apache

Load the this webpage http://localhost/amber-addons/test-WebDAV/ if all goes well a helios browser should pop up. Examine the Class Methods of class TestWebDAV there is a method to create a resouce collection #mkcol:onSuccess:onError: and to delete resources #delete:onSuccess:onError.