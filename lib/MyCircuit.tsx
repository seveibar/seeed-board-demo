import { layout } from "tscircuit";
import manual_edits from "./MyCircuit.manual-edits";

export const MyCircuit = () => (
	<group layout={layout().manualEdits(manual_edits)}>
		<chip
			footprint="dip14_w15.244mm_p2.54mm"
			name="U1"
			pinLabels={{
				"1": "D0",
				"2": "D1",
				"3": "D2",
				"4": "D3",
				"5": "D4",
				"6": "D5",
				"7": "D6",
				"8": "D7",
				"9": "D8",
				"10": "D9",
				"11": "D10",
				"12": "3V3",
				"13": "GND",
				"14": "5V",
			}}
		/>
		<chip
			name="J1"
			pinLabels={{
				1: "pin1",
				2: "pin2",
				3: "pin3",
				4: "pin4",
			}}
			footprint="pinrow4"
			pcbX={0}
			pcbY={"-12mm"}
		/>
		<resistor
			resistance={330}
			supplierPartNumbers={{
				jlcpcb: ["C101460"],
			}}
			name="R1"
			footprint="res0805"
			pcbX={9}
			pcbY={-12}
		/>
		<trace
			pcbRouteHints={[
				{
					x: 4.5,
					y: -7.32,
				},
				{
					x: 1.5,
					y: -10,
				},
			]}
			thickness="0.2mm"
			from=".U1 > .D9"
			to=".J1 > port.pin1"
		/>
		<trace
			pcbRouteHints={[
				{
					x: -5,
					y: -11,
				},
				{
					x: -5,
					y: -13,
				},
			]}
			thickness="0.2mm"
			from=".U1 > .D10"
			to=".J1 > port.pin2"
		/>
		<trace thickness="0.2mm" from=".U1 > .GND" to=".R1 > port.right" />
		<trace thickness="0.2mm" from=".J1 > port.pin3" to=".R1 > port.left" />
		<trace thickness="0.2mm" from=".J1 > port.pin4" to=".R1 > port.left" />
	</group>
);
