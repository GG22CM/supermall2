<template>
	<div v-if="Object.keys(paramsMsg).length" class="paramsBox">
		<div class="tableParams">
			<table>
				<tr v-for="trItem in paramsMsg.table">
					<td v-for="tdItem in trItem">{{tdItem}}</td>
				</tr>
			</table>
		</div>
		<div class="ruleParams">
			<table>
				<tr v-for="item in paramsMsg.rule">
					<td>{{item.key}}</td>
					<td>{{item.value}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: "DetailParamsBox",
	props: {
		paramsMsg: {
			type: Object,
			default() {
				return {}
			}
		}
	}
}
</script>

<style scoped>
	.paramsBox {
		padding: 20px;
		border-bottom: 5px solid #eee;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	table tr {
		font-size: 16px;
		border-bottom: 1px solid #eee;
		line-height: 24px;
	}

	table tr td {
		padding: 20px 0;
		vertical-align: top;
	}

	.tableParams {
		border-bottom: 5px solid #eee;
	}

	.tableParams tr td:nth-of-type(n + 2) {
		text-align: center;
	}

	.ruleParams tr td:first-child {
		width: 30%;
	}
</style>
