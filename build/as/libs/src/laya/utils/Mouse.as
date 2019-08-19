package laya.utils {

	/*
	 * <code>Mouse</code> 类用于控制鼠标光标样式。
	 */
	public class Mouse {

		/*
		 * @private 
		 */
		private static var _style:*;

		/*
		 * @private 
		 */
		private static var _preCursor:*;

		/*
		 * 设置鼠标样式
		 * @param cursorStr 例如auto move no-drop col-resize
		 */
		public static var cursor:String;

		/*
		 * 隐藏鼠标
		 */
		public static function hide():void{}

		/*
		 * 显示鼠标
		 */
		public static function show():void{}
	}

}