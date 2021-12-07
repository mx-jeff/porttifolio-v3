export function loadMaterialize(){
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    var en_elems = document.querySelectorAll('.en_sidenav');
    var en_instances = M.Sidenav.init(en_elems, {});
}