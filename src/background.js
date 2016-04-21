chrome.runtime.sendMessage("ggogbececlebkhafdbibepcoegajmcnp", {method: "register", name: "Canadian"}, {});
chrome.runtime.onMessageExternal.addListener(onMessage);

function onMessage(message, sender, respond)
{
	switch (message.method)
	{
		case "message":
			respond(canadianize(message.text));
			break;
	}
}

function canadianize(text)
{
	text = text.replace(/\B@\b/gi, "🍁");
	text = text.replace(/\bjavascript\b/gi, "syrup sucking");
	text = text.replace(/\bjs\b/gi, "hockey");
	text = text.replace(/\bdata\b/gi, "poutine");
	text = text.replace(/\bhtml\b/gi, "Tim Horton's");
	text = text.replace(/\bfunctions\b/gi, "all-dressed chips");
	text = text.replace(/\bcoding\b/gi, "givin'er");
	text = text.replace(/(?:n( ))?\berror\b/gi, "$1moose");
	text = text.replace(/\bthe game\b/gi, "Canada");
	text = text.replace(/\bbro\b/gi, "bud");
	text = text.replace(/\bcss\b/gi, "maple syrup");
	text = text.replace(/\babout\b/gi, "aboot");
	text = text.replace(/\s*(\?\s*)$/, ", eh$1");
	return text;
}
