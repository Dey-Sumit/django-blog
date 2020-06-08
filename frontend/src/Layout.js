import React, { useState } from 'react'
import { Route } from 'react-router-dom'


// import { ProfileBadgeComponent, ProfileEditComponent } from '../profiles'
// import { LogoutComponent, LoginComponent } from './Auth/index'
// import { NavBar, SideNav, Grid } from './components'
// import { TweetDetailComponent } from '../tweets'

export const Layout = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Grid grid='col col-1' />
                <Grid grid="col col-2"></Grid>
                <Grid grid='col col-5 p-0 main_col'>
                    <Route path="/" exact render={
                        () =>
                            <>  <NavBar header='Max_blog' />
                                <TweetComponent />
                            </>}
                    />
                    <Route path="/profile/:username" exact component={ProfileBadgeComponent} />
                    <Route path="/profile/edit/:username" exact component={ProfileEditComponent} />
                    <Route path="/login/" exact render={() => <LoginComponent handleAuth={handleAuth} />} />
                    <Route path="/logout/" exact render={() => <LogoutComponent />} />
                    <Route path="/tweet/:id" exact component={TweetDetailComponent} />
                </Grid>
                <Grid grid="col col-3">Cards</Grid>
                <Grid grid="col col-1"></Grid>
            </div>
        </div>
    )
}