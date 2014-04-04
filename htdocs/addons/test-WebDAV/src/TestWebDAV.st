Smalltalk createPackage: 'TestWebDAV'!
Object subclass: #TestWebDAV
	instanceVariableNames: ''
	package: 'TestWebDAV'!

!TestWebDAV class methodsFor: 'as yet unclassified'!

delete: url
	PlatformInterface ajax: 
    #{ 
        'url' ->  url.
       'type' -> 'DELETE' 
    }
!

makecol: url
	PlatformInterface ajax: 
    #{ 
        'url' ->  url.
       'type' -> 'MKCOL' 
    }
! !

