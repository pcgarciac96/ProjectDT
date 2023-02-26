import router from "../router";
export function getPermissionsModule(permissionWeb) {
  let permissionsActives = router.currentRoute.value.meta.permissions;
  let existPermission = permissionsActives.find(
    (permission) => permission.name === permissionWeb
  );
  return existPermission ? true : false;
}
