const isAllowedHost = (data) => {
	const allowedHosts = ['bandcamp.com', 'clyp.it', 'hearthis.at', 'instaud.io', 'mixcloud.com', 'orfium.com',
		'reverbnation.com', 'soundcloud.com', 'splice.com'];

	for (let i = 0; i < allowedHosts.length; i++) {
		if (data.includes(allowedHosts[i])) {
			return true;
		}
	}
};

module.exports = isAllowedHost;
