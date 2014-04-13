Smalltalk createPackage: 'TestWebDAV'!
Object subclass: #TestWebDAV
	instanceVariableNames: ''
	package: 'TestWebDAV'!

!TestWebDAV class methodsFor: 'as yet unclassified'!

delete: url onSuccess: sBlock onError: errorBlock
	PlatformInterface ajax: 
    #{ 
        'url' ->  url.
       'type' -> 'DELETE'.
	   'success' -> sBlock.
	   'error' -> errorBlock
    }
!

makecol: url  onSuccess: sBlock onError: errorBlock
	PlatformInterface ajax: 
    #{ 
        'url' ->  url.
       'type' -> 'MKCOL'.
	   'success' -> sBlock.
	   'error' -> errorBlock 
    }
! !

