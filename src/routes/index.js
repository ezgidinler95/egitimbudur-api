import AuthRouter from './auth/AuthRouter';

const AppRoutes = (app) => {
    app.use(AuthRouter.routePrefix, AuthRouter.route());
}

export default AppRoutes;