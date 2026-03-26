import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Icon} from '@iconify/react';

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
			<Icon icon="mdi:application-brackets-outline" style={{fontSize: 28, color: '#6f7b88'}} />
			<div>Build apps</div>
		</div>
	);
};

export const ScreenshotRecreation: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				fontFamily:
					'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
				background:
					'radial-gradient(circle at 50% 105%, rgba(255,220,110,0.72) 0%, rgba(255,220,110,0.42) 22%, rgba(255,241,200,0.18) 40%, rgba(255,255,255,0) 62%), linear-gradient(90deg, #fff9f1 0%, #f7f0e5 8%, #fffaf1 18%, #f7eedf 28%, #fffaf1 40%, #f6eddf 52%, #fff9ef 64%, #f6eddc 76%, #fff9f1 88%, #f6ede0 100%)',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'repeating-linear-gradient(78deg, rgba(255,214,102,0.08) 0px, rgba(255,214,102,0.08) 22px, rgba(255,255,255,0) 70px, rgba(255,255,255,0) 120px)',
					opacity: 0.9,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: 286,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						fontSize: 52,
						fontWeight: 600,
						color: '#111820',
						letterSpacing: '-0.03em',
						marginBottom: 68,
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
				</div>

				<div
					style={{
						marginTop: 57,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: 18,
					}}
				>
					<div
						style={{
							display: 'flex',
							gap: 14,
							alignItems: 'center',
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
						}}
					>
						<PromptChip text="Meeting recorder" icon="mdi:wrench-outline" iconColor="#4e83ff" />
						<PromptChip text="LinkedIn outreach" icon="mdi:card-text-outline" iconColor="#2ecc71" />
						<PromptChip text="Support chatbot" icon="mdi:wrench-outline" iconColor="#4e83ff" />
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};

export default ScreenshotRecreation;