#The purpose of this repository
This repository sets up a WebDAV reference implmentation in apache. To test the implementation of directory based WebDAV methods MKCOL and DELETE. Amber code is written test against the apache reference. Those tests are then used to add MKCOL and DELETE functions to the amber FileServer.

Why? Directory creation is missing from the FileServer and it is necessary to include that function in the FileServer so that amber addon development can be done. Using grunt or command line tools is inferior to do these tasks in amber.
