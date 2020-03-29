declare module "@iobroker/plugin-base/types" {
	export interface PluginSettings {
		/** The scope in which the plugin will be executed */
		pluginScope: "adapter" | "controller";
		/** The object namespace for the plugin, e.g. `system.adapter.<adaptername>.0.plugins.name`, or `system.host.<hostname>.plugins.name` */
		pluginNamespace: string;
		/** The namespace which will be used for logging */
		pluginLogNamespace: string;
		/** The logger object to use for logging */
		log: ioBroker.Logger;
		/** The complete ioBroker configuration object */
		iobrokerConfig: Record<string, any>;
		/** The package.json contents from the "parent" (adapter/controller) which uses this plugin */
		parentPackage: Record<string, any>;
	}
	export type InitCallback = (
		err: string | undefined,
		initSuccessful?: boolean
	) => void;
}