package rsync

import (
	"context"
	"net"
	"strconv"
	"time"

	"github.com/praetorian-inc/fingerprintx/pkg/plugins"
	"github.com/praetorian-inc/fingerprintx/pkg/plugins/services/rsync"
	"github.com/projectdiscovery/nuclei/v3/pkg/protocols/common/protocolstate"
)

type (
	// RsyncClient is a minimal Rsync client for nuclei scripts.
	// @example
	// ```javascript
	// const rsync = require('nuclei/rsync');
	// const client = new rsync.Client();
	// ```
	RsyncClient struct{}
)

type (
	// IsRsyncResponse is the response from the IsRsync function.
	// this is returned by IsRsync function.
	// @example
	// ```javascript
	// const rsync = require('nuclei/rsync');
	// const isRsync = rsync.IsRsync('acme.com', 873);
	// log(toJSON(isRsync));
	// ```
	IsRsyncResponse struct {
		IsRsync bool
		Banner  string
	}
)

// IsRsync checks if a host is running a Rsync server.
// @example
// ```javascript
// const rsync = require('nuclei/rsync');
// const isRsync = rsync.IsRsync('acme.com', 873);
// log(toJSON(isRsync));
// ```
func (c *RsyncClient) IsRsync(host string, port int) (IsRsyncResponse, error) {
	resp := IsRsyncResponse{}

	timeout := 5 * time.Second
	conn, err := protocolstate.Dialer.Dial(context.TODO(), "tcp", net.JoinHostPort(host, strconv.Itoa(port)))
	if err != nil {
		return resp, err
	}
	defer conn.Close()

	rsyncPlugin := rsync.RSYNCPlugin{}
	service, err := rsyncPlugin.Run(conn, timeout, plugins.Target{Host: host})
	if err != nil {
		return resp, err
	}
	if service == nil {
		return resp, nil
	}
	resp.Banner = service.Version
	resp.IsRsync = true
	return resp, nil
}
