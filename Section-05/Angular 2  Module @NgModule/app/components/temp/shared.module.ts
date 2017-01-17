
@NgModule({
    declarations: [ // put all your components / directives / pipes here
        AppComponent, // the root component
        No1Component, No2Component, ... // e.g. put all 10 components here
        AComponent, BComponent, // e.g. put component A and B here
        NiceDirective, 
        AwesomePipe,
    ],
    imports: [ // put all your modules here
        CustomerModule, // Customer MOdule 
        ProductModule, // product MOdule 
        RouterModule, // some third party modules / libraries
    ],
    providers: [ // put all your services here
        AwesomeService,
    ],
    bootstrap: [ // The main components to be bootstrapped in main.ts file, normally one only
        AppComponent
    ]
})
export class AppModule { }
