#!/usr/bin/env node
import sc from 'subcommander'
import build from './build'
import zips from './zips'

const buildCmd = sc.command(`build`, {
		desc: `Build location JSON files`,
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