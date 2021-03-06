
import 'ngui/http';
import 'ngui/util';
import 'ngui/sys';
import { Indep, ngui, New, Text } from 'ngui';

var ts = 0;

function start(...args) {
	ts = new Date().valueOf();
	util.log('start:', ...args);
}

function log(...args) {
	var ts2 = new Date().valueOf();
	util.log('time:', ts2 - ts, ...args);
	ts = ts2;
}

function show_fsp_ok() {

	var displayPort = ngui.displayPort;
	var fsp = null;
	var priv_fsp_value = 0;
	var priv_cpu_usage = 0;

	function up_fsp() {
		var fsp_value = displayPort.fsp();
		var cpu_usage = sys.cpuUsage();
		if (priv_fsp_value != fsp_value || priv_cpu_usage != cpu_usage) {
			fsp.value = 'FSP: ' + fsp_value + ', CPU: ' + (cpu_usage * 100).toFixed(0);
			priv_fsp_value = fsp_value;
		}
		setTimeout(up_fsp, 1000);
	}

	setTimeout(function() {
		var root = ngui.root;
		if (root) {
			fsp = New(
				<Indep alignY="bottom" x=5 y=-5>
					<Text textColor="#f00" />
				</Indep>
			, root).first;

			up_fsp();
		}
	}, 1000);

}

function show_fsp() {
	var app = ngui.app;
	util.assert(app);

	if (app.isLoad) {
		show_fsp_ok();
	} else {
		app.onLoad.on(show_fsp_ok);
	}
}

exports.start = start;
exports.log = log;
exports.show_fsp = show_fsp;
