export default (required) => async (req, res, next) => {
  const { user } = req;
  if (!user) return res.status(401).json({ message: 'Unauthorized' });
  const role = await user.getRole();
  const permissions = await role.getPermissions();
  const match = permissions.find(p => p.module === required.module);
  if (match && match[required.action]) return next();
  return res.status(403).json({ message: 'Forbidden-Not Allowed' });
};