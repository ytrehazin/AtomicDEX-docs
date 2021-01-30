(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{400:function(t,e,a){"use strict";a.r(e);var s=a(48),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dex-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dex-metrics"}},[t._v("#")]),t._v(" DEX Metrics")]),t._v(" "),a("p",[t._v("MarketMaker 2.0 (MM2) collects data metrics that allow interested users to view the history of events of a MM2 session. For example, metrics recorded by MM2 include incoming and outgoing traffic.")]),t._v(" "),a("p",[t._v("The metrics can be:")]),t._v(" "),a("ul",[a("li",[t._v("Recorded to a log file at a specified frequency")]),t._v(" "),a("li",[t._v("Requested using AtomicDEX API in JSON format")]),t._v(" "),a("li",[t._v("Visualized using Prometheus and Grafana")])]),t._v(" "),a("h2",{attrs:{id:"setting-up-the-log-recording"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-log-recording"}},[t._v("#")]),t._v(" Setting Up the Log Recording")]),t._v(" "),a("p",[t._v("By default, the collected metrics are recorded to a log file every five minutes.")]),t._v(" "),a("p",[t._v("A custom time interval can be set during the initiation of the MarketMaker 2.0 software.")]),t._v(" "),a("p",[t._v("For example, to set the interval to two minutes, initiate MM2 with the additional argument "),a("code",[t._v('\\"metrics\\":120')]),t._v(", as follows.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Note that in the examples below, the you will need to change the text to reflect your own password and passphrase.")])]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("stdbuf -oL ./mm2 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("gui"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("MM2GUI"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("netid"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":9999, "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userhome"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('/${HOME#"')]),t._v("/"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("passphrase"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("YOUR_PASSPHRASE_HERE"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rpc_password"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("YOUR_PASSWORD_HERE"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("metrics"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(':120}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("p",[t._v("To prohibit the recording of metrics to the log file, set the "),a("code",[t._v("metrics")]),t._v(" argument to 0.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("stdbuf -oL ./mm2 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("gui"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("MM2GUI"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("netid"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":9999, "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userhome"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('/${HOME#"')]),t._v("/"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("passphrase"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("YOUR_PASSPHRASE_HERE"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rpc_password"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("YOUR_PASSWORD_HERE"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("metrics"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(':0}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("h2",{attrs:{id:"api-calling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-calling"}},[t._v("#")]),t._v(" API Calling")]),t._v(" "),a("p",[t._v("Execute the following command to request a metrics snapshot.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("method"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("metrics"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v("\n")])])]),a("p",[t._v("The response should be similar to the following.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"metrics"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rpc_client.traffic.out"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"labels"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RICK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"client"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electrum"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"counter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("92")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rpc_client.traffic.in"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"labels"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RICK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"client"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electrum"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"counter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("125")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"prometheus-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-integration"}},[t._v("#")]),t._v(" Prometheus Integration")]),t._v(" "),a("p",[t._v("MarketMaker 2.0 supports integration with Prometheus. This software allows users to setup automated scraping of metrics at regular intervals and enables sophisticated queries on the stored "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Time_series",target:"_blank",rel:"noopener noreferrer"}},[t._v("timeseries"),a("OutboundLink")],1),t._v(" data. It also allows users to configure an elegant dashboard using built-in "),a("a",{attrs:{href:"https://prometheus.io/docs/prometheus/latest/getting_started/#using-the-expression-browser",target:"_blank",rel:"noopener noreferrer"}},[t._v("graphs,"),a("OutboundLink")],1),t._v(" or to export data for graphical processing using "),a("a",{attrs:{href:"https://prometheus.io/docs/visualization/grafana/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grafana"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Prometheus scrapes metrics using an HTTP pull model.")]),t._v(" "),a("p",[t._v("To provide Prometheus with the ability to scrape the metrics at "),a("a",{attrs:{href:"localhost:9001"}},[t._v("localhost:9001")]),t._v(", initiate MM2 with the following additional argument:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\\"prometheusport\\":9001\n')])])]),a("p",[t._v("You may optionally specify the username and password for Prometheus to enforce basic authorization security. For this effect, add one more argument as follows:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\\"prometheus_credentials\\":\\"PROM_USERNAME:PROM_PASSWORD\\"\n')])])]),a("p",[t._v("Note that this additional argument is NOT necessary.")]),t._v(" "),a("p",[t._v("Replace PROM_USERNAME and PROM_PASSWORD with your actual Prometheus username and password.")]),t._v(" "),a("p",[t._v("Note that the username and password should be separated by "),a("code",[t._v(":")]),t._v(".")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("stdbuf -oL ./mm2 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("gui"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("MM2GUI"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("netid"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":9999, "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("userhome"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('/${HOME#"')]),t._v("/"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("passphrase"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("YOUR_PASSPHRASE_HERE"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("rpc_password"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("YOUR_PASSWORD_HERE"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("prometheusport"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":9001, "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("prometheus_credentials"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("PROM_USERNAME:PROM_PASSWORD"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("h3",{attrs:{id:"configuring-prometheus-to-monitor-marketmaker-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-prometheus-to-monitor-marketmaker-2-0"}},[t._v("#")]),t._v(" Configuring Prometheus to monitor MarketMaker 2.0")]),t._v(" "),a("p",[t._v("The following basic Prometheus configuration file, named "),a("code",[t._v("prometheus.yml")]),t._v(", can simplify the process of connecting Prometheus to MarketMaker2.0.")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("global")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scrape_interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10s\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scrape_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MarketMaker2'")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("basic_auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PROM_USERNAME'")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PROM_PASSWORD"')]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("static_configs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.0.0:9001'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("Replace PROM_USERNAME and PROM_PASSWORD with your actual Prometheus username and password.")]),t._v(" "),a("p",[t._v("To learn more about creating a Prometheus configuration file, "),a("a",{attrs:{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("read this documentation."),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"starting-prometheus-and-grafana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-prometheus-and-grafana"}},[t._v("#")]),t._v(" Starting Prometheus and Grafana")]),t._v(" "),a("p",[t._v("A simple way to initiate Prometheus and Grafana is to have the standard Prometheus and Grafana docker containers run together using "),a("code",[t._v("docker-compose")]),t._v(".")]),t._v(" "),a("p",[t._v("Name the following compose file as "),a("code",[t._v("docker-compose.yml")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.1"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prometheus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("grafana")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("grafana")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grafana/grafana"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" prometheus\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3000:3000'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" grafana"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/grafana\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prometheus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prom/prometheus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'9090:9090'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./prometheus.yml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/prometheus/prometheus.yml\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" prometheus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/prometheus\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n")])])]),a("p",[t._v("Use the following command to start both containers.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker-compose up\n")])])]),a("h3",{attrs:{id:"using-the-graphing-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-graphing-interface"}},[t._v("#")]),t._v(" Using the graphing interface")]),t._v(" "),a("h4",{attrs:{id:"prometheus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prometheus"}},[t._v("#")]),t._v(" Prometheus")]),t._v(" "),a("p",[t._v("Once the docker containers are up and running, navigate to "),a("a",{attrs:{href:"http://localhost:9090/graph",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9090/graph"),a("OutboundLink")],1),t._v(" and use the "),a("code",[t._v("Graph")]),t._v(" tab to use Prometheus's built-in graph expressions.")]),t._v(" "),a("p",[t._v("To visualize one of the available metrics, click on the dropdown menu highlighted in the following picture, select a metric and then click execute.")]),t._v(" "),a("div",{staticStyle:{margin:"2rem","text-align":"center",width:"80%"}},[a("img",{attrs:{src:"/prom-metric-selection.png"}})]),t._v(" "),a("p",[t._v("The graphical representation of the metric can be viewed in the "),a("code",[t._v("Graph")]),t._v(" tab.")]),t._v(" "),a("div",{staticStyle:{margin:"2rem","text-align":"center",width:"80%"}},[a("img",{attrs:{src:"/prom-graph-example.png"}})]),t._v(" "),a("p",[t._v('More graphs can be added to the same page using the "Add Graph" button available.')]),t._v(" "),a("h4",{attrs:{id:"grafana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grafana"}},[t._v("#")]),t._v(" Grafana")]),t._v(" "),a("p",[t._v("Grafana can access data scraped by Prometheus and it can analyze, transform and display it in a variety of ways. For more information see the "),a("a",{attrs:{href:"https://prometheus.io/docs/visualization/grafana/#using",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prometheus guide."),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("To use Grafana, navigate to "),a("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000"),a("OutboundLink")],1),t._v(" and log in using the default credentials: "),a("code",[t._v("admin")]),t._v(" / "),a("code",[t._v("admin")]),t._v(". When offered to set a new password, do so and remember it.")]),t._v(" "),a("p",[t._v("Next, navigate to "),a("a",{attrs:{href:"http://localhost:3000/dashboards",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000/dashboards"),a("OutboundLink")],1),t._v(" and click on the "),a("code",[t._v("New Dashboard")]),t._v(" button")]),t._v(" "),a("div",{staticStyle:{margin:"2rem","text-align":"center",width:"80%"}},[a("img",{attrs:{src:"/grafana-new-dashboard.png"}})]),t._v(" "),a("p",[t._v("Next, click the "),a("code",[t._v("Add Panel")]),t._v(" button")]),t._v(" "),a("div",{staticStyle:{margin:"2rem","text-align":"center",width:"80%"}},[a("img",{attrs:{src:"/grafana-add-panel.png"}})]),t._v(" "),a("p",[t._v("In the next screen, select "),a("code",[t._v("Prometheus")]),t._v(" as the provider from the drop down menu in the "),a("code",[t._v("Query")]),t._v(" tab.")]),t._v(" "),a("div",{staticStyle:{margin:"2rem","text-align":"center",width:"80%"}},[a("img",{attrs:{src:"/grafana-select-prometheus.png"}})]),t._v(" "),a("p",[t._v("Click the "),a("code",[t._v("Metrics")]),t._v(" menu and select one of the available options. These should be the same ones available directly in the Graphs tab of Prometheus: "),a("a",{attrs:{href:"http://localhost:9090/graph",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9090/graph"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticStyle:{margin:"2rem","text-align":"center",width:"80%"}},[a("img",{attrs:{src:"/grafana-select-metric.png"}})]),t._v(" "),a("p",[t._v("Optionally, follow the hint to add "),a("code",[t._v("rate")]),t._v(" in the previous screen by clicking "),a("code",[t._v("Fix by adding rate()")]),t._v(". This results in the following screen.")]),t._v(" "),a("div",{staticStyle:{margin:"2rem","text-align":"center",width:"80%"}},[a("img",{attrs:{src:"/grafana-rate-applied.png"}})]),t._v(" "),a("p",[t._v("Click the "),a("code",[t._v("Save")]),t._v(" button and set a name for the dashboard.")]),t._v(" "),a("div",{staticStyle:{margin:"2rem","text-align":"center",width:"80%"}},[a("img",{attrs:{src:"/grafana-save-panel.png"}})]),t._v(" "),a("p",[t._v("Now you have a Grafana dashboard with a panel that shows a graph of the "),a("code",[t._v("rpc_client_traffic_in")]),t._v(".")]),t._v(" "),a("div",{staticStyle:{margin:"2rem","text-align":"center",width:"80%"}},[a("img",{attrs:{src:"/grafana-dashboard.png"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);