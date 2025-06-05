const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{平台: 0},
	{镜头跟随: 0},
	{yy: 0},
	{实体: 0},
	{平铺图: 0},
	{ww: 0},
	{键盘: 0},
	{平铺图2: 0}
];

self.InstanceType = {
	yy: class extends self.ISpriteInstance {},
	平铺图: class extends self.ITiledBackgroundInstance {},
	ww: class extends self.ISpriteInstance {},
	键盘: class extends self.IInstance {},
	平铺图2: class extends self.ITiledBackgroundInstance {}
}