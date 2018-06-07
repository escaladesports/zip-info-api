#!/usr/bin/env node
import sc from 'subcommander'
import build from './build'

sc.command(`build`, {
		desc: `Build zip code files`,
		callback: build,
	})
	.option(`path`, {
		abbr: `P`,
		desc: `Output path`,
	})
	.option(`minimum-digits`, {
		abbr: `M`,
		desc: `Minimum number of partial digits`,
	})

sc.parse()