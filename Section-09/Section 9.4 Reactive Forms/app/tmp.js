ngOnInit() {
    // the long way
    this.myForm = new FormGroup({
        name: new FormControl('', [<any>Validators.required, 
        	                  <any>Validators.minLength(5)]),
        address: new FormGroup({
            street: new FormControl('', <any>Validators.required),
            postcode: new FormControl('8000')
        })
    });
}


ngOnInit() {

    // the short way
    this.myForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            address: this._fb.group({
                street: ['', <any>Validators.required],
                postcode: ['']
            })
        });

}