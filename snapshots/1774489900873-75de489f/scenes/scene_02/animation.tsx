import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Icon} from '@iconify/react';

const CLAMP = {
	extrapolateLeft: 'clamp' as const,
	extrapolateRight: 'clamp' as const,
};

const PromptChip: React.FC<{
	text: string;
	icon: string;
	iconColor: string;
}> = ({text, icon, iconColor}) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 10,
				padding: '14px 22px',
				backgroundColor: '#ffffff',
				borderRadius: 999,
				boxShadow: '0 1px 0 rgba(0,0,0,0.03)',
				fontSize: 26,
				fontWeight: 400,
				color: '#29323c',
				lineHeight: 1,
				whiteSpace: 'nowrap',
			}}
		>
			<Icon icon={icon} style={{fontSize: 28, color: iconColor}} />
			<div>{text}</div>
		</div>
	);
};

const AppPill: React.FC = () => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: 10,
				padding: '16px 24px',
				borderRadius: 999,
				border: '2px solid #dde2ea',
				backgroundColor: '#ffffff',
				fontSize: 26,
				color: '#1c2430',
				fontWeight: 500,
				lineHeight: 1,
			}}
		>
			<Icon
				icon="mdi:application-brackets-outline"
				style={{fontSize: 28, color: '#6f7b88'}}
			/>
			<div>Build apps</div>
		</div>
	);
};

export const Scene02TranspiledReveal: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const intro = spring({
		fps,
		frame,
		config: {
			damping: 200,
			stiffness: 180,
			mass: 0.9,
		},
		durationInFrames: 26,
	});

	const exitOpacity = interpolate(frame, [78, 89], [1, 0], CLAMP);
	const subjectOpacity = interpolate(frame, [0, 8, 16], [0, 0.72, 1], CLAMP) * exitOpacity;
	const subjectBlur = interpolate(frame, [0, 10, 18, 80, 89], [14, 6, 0, 0, 8], CLAMP);
	const orbitX = interpolate(frame, [0, 45, 89], [-12, 0, 10], CLAMP);
	const subjectY = interpolate(frame, [0, 18, 89], [26, 0, -10], CLAMP);
	const breathing = 1 + Math.sin(frame / 9) * 0.004;
	const subjectScale = (0.952 + intro * 0.05) * breathing * interpolate(frame, [56, 89], [1, 1.02], CLAMP);

	const titleOpacity =
		interpolate(frame, [0, 8, 14], [0, 0.84, 1], CLAMP) *
		interpolate(frame, [24, 40], [1, 0], CLAMP);
	const titleBlur = interpolate(frame, [0, 10, 22, 40], [18, 5, 0, 10], CLAMP);
	const titleY = interpolate(frame, [0, 16, 40], [28, 0, -10], CLAMP);
	const titleScale = interpolate(frame, [0, 18, 40], [0.96, 1, 1.02], CLAMP);

	const headingY = interpolate(frame, [0, 18, 89], [12, 0, -4], CLAMP);
	const inputY = interpolate(frame, [0, 18, 89], [22, 0, -6], CLAMP);
	const chipsY = interpolate(frame, [0, 18, 89], [28, 0, -8], CLAMP);
	const row1X = interpolate(frame, [0, 89], [-10, 10], CLAMP);
	const row2X = interpolate(frame, [0, 89], [10, -8], CLAMP);
	const lightPassX = interpolate(frame, [6, 50, 89], [-560, 260, 980], CLAMP);
	const lightPassOpacity = 0.18 + Math.sin(frame / 11) * 0.04;
	const bgScale = interpolate(frame, [0, 89], [1.03, 1.08], CLAMP);
	const bgX = interpolate(frame, [0, 89], [-18, 18], CLAMP);
	const stripeX = interpolate(frame, [0, 89], [-40, 20], CLAMP);
	const glowScale = interpolate(frame, [0, 89], [0.94, 1.04], CLAMP);

	return (
		<AbsoluteFill
			style={{
				fontFamily:
					'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
				overflow: 'hidden',
				backgroundColor: '#fff8ef',
			}}
		>
			{/* TRANSPILED_SHOWCASE_SCENE_2 */}
			{/* COMPONENT_REFERENCE_ID:9008c876-20ab-4296-a747-90f478aa5d0c */}

			<div
				style={{
					position: 'absolute',
					inset: -80,
					transform: `translateX(${bgX}px) scale(${bgScale})`,
					background:
						'radial-gradient(circle at 50% 105%, rgba(255,220,110,0.72) 0%, rgba(255,220,110,0.42) 22%, rgba(255,241,200,0.18) 40%, rgba(255,255,255,0) 62%), linear-gradient(90deg, #fff9f1 0%, #f7f0e5 8%, #fffaf1 18%, #f7eedf 28%, #fffaf1 40%, #f6eddf 52%, #fff9ef 64%, #f6eddc 76%, #fff9f1 88%, #f6ede0 100%)',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					inset: -100,
					transform: `translateX(${stripeX}px) scale(1.02)`,
					background:
						'repeating-linear-gradient(78deg, rgba(255,214,102,0.08) 0px, rgba(255,214,102,0.08) 22px, rgba(255,255,255,0) 70px, rgba(255,255,255,0) 120px)',
					opacity: 0.92,
				}}
			/>

			<div
				style={{
					position: 'absolute',
					left: '50%',
					top: '58%',
					width: 1460,
					height: 720,
					borderRadius: '50%',
					transform: `translate(-50%, -50%) scale(${glowScale})`,
					background:
						'radial-gradient(circle, rgba(255,224,140,0.34) 0%, rgba(255,230,165,0.18) 32%, rgba(255,245,220,0.08) 54%, rgba(255,255,255,0) 72%)',
					filter: 'blur(8px)',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'radial-gradient(circle at 50% 40%, rgba(255,255,255,0) 50%, rgba(236,216,184,0.18) 100%)',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					top: 108,
					left: 120,
					right: 120,
					display: 'flex',
					justifyContent: 'center',
					opacity: titleOpacity,
					filter: `blur(${titleBlur}px)`,
					transform: `translateY(${titleY}px) scale(${titleScale})`,
				}}
			>
				<div
					style={{
						fontSize: 72,
						fontWeight: 800,
						letterSpacing: '-0.055em',
						lineHeight: 1,
						color: '#161b22',
						textAlign: 'center',
						textShadow: '0 10px 30px rgba(255,255,255,0.45)',
					}}
				>
					Introducing The AI Workflow Builder
				</div>
			</div>

			<div
				style={{
					position: 'absolute',
					inset: 0,
					opacity: subjectOpacity,
					filter: `blur(${subjectBlur}px)`,
				}}
			>
				<div
					style={{
						position: 'absolute',
						left: 0,
						right: 0,
						top: 250,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						transform: `translateX(${orbitX}px) translateY(${subjectY}px) scale(${subjectScale})`,
					}}
				>
					<div
						style={{
							fontSize: 52,
							fontWeight: 600,
							color: '#111820',
							letterSpacing: '-0.03em',
							marginBottom: 68,
							transform: `translateY(${headingY}px)`,
						}}
					>
						How can I help?
					</div>

					<div
						style={{
							width: 1228,
							height: 201,
							backgroundColor: '#ffffff',
							borderRadius: 31,
							border: '2px solid rgba(198,206,217,0.6)',
							boxShadow:
								'0 18px 34px rgba(214,177,74,0.10), 0 6px 12px rgba(40,48,60,0.14), inset 0 1px 0 rgba(255,255,255,0.8)',
							position: 'relative',
							overflow: 'hidden',
							transform: `translateY(${inputY}px)`,
						}}
					>
						<div
							style={{
								position: 'absolute',
								left: 28,
								top: 34,
								fontSize: 30,
								fontWeight: 400,
								color: '#6b7788',
								letterSpacing: '-0.02em',
							}}
						>
							Build an agent or perform a task
						</div>

						<div
							style={{
								position: 'absolute',
								left: 26,
								bottom: 30,
							}}
						>
							<AppPill />
						</div>

						<div
							style={{
								position: 'absolute',
								right: 185,
								bottom: 42,
								display: 'flex',
								alignItems: 'center',
								gap: 28,
								color: '#8d98a5',
							}}
						>
							<Icon icon="mdi:paperclip" style={{fontSize: 39}} />
							<Icon icon="mdi:microphone-outline" style={{fontSize: 36}} />
						</div>

						<div
							style={{
								position: 'absolute',
								right: 25,
								bottom: 27,
								width: 63,
								height: 63,
								borderRadius: '50%',
								backgroundColor: '#87a7ff',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Icon icon="mdi:arrow-up" style={{fontSize: 46, color: '#ffffff'}} />
						</div>

						<div
							style={{
								position: 'absolute',
								top: -36,
								bottom: -36,
								width: 280,
								transform: `translateX(${lightPassX}px) skewX(-18deg)`,
								background:
									'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.72) 48%, rgba(255,255,255,0) 100%)',
								opacity: lightPassOpacity,
							}}
						/>
					</div>

					<div
						style={{
							marginTop: 57,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: 18,
							transform: `translateY(${chipsY}px)`,
						}}
					>
						<div
							style={{
								display: 'flex',
								gap: 14,
								alignItems: 'center',
								transform: `translateX(${row1X}px)`,
							}}
						>
							<PromptChip text="Personal website" icon="mdi:card-text-outline" iconColor="#2ecc71" />
							<PromptChip text="Customer support email" icon="mdi:wrench-outline" iconColor="#4e83ff" />
							<PromptChip text="Outbound sales calls" icon="mdi:wrench-outline" iconColor="#4e83ff" />
							<PromptChip text="Lead gen" icon="mdi:card-text-outline" iconColor="#2ecc71" />
						</div>

						<div
							style={{
								display: 'flex',
								gap: 14,
								alignItems: 'center',
								transform: `translateX(${row2X}px)`,
							}}
						>
							<PromptChip text="Meeting recorder" icon="mdi:wrench-outline" iconColor="#4e83ff" />
							<PromptChip text="LinkedIn outreach" icon="mdi:card-text-outline" iconColor="#2ecc71" />
							<PromptChip text="Support chatbot" icon="mdi:wrench-outline" iconColor="#4e83ff" />
						</div>
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};

export default Scene02TranspiledReveal;