const restriction = ['/:pathMatch(.*)*', '*', '/', '']


function getRoutesList(routes) {
    return routes.reduce((array, route) => {
        let path = route.path

        if (!restriction.includes(route.path) && !route.meta?.auth) {
            array.push(path);
        }

        if (route.children) {
            array.push(...getRoutesList(route.children, `${path}/`));
        }

        return array;
    }, []);
}

export default getRoutesList